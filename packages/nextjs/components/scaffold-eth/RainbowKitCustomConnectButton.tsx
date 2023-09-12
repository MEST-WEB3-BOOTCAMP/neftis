import { useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { QRCodeSVG } from "qrcode.react";
import CopyToClipboard from "react-copy-to-clipboard";
import { useDisconnect, useSwitchNetwork } from "wagmi";
import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
import { Address, Balance, BlockieAvatar } from "~~/components/scaffold-eth";
import { useAutoConnect, useNetworkColor } from "~~/hooks/scaffold-eth";
import { getBlockExplorerAddressLink, getTargetNetwork } from "~~/utils/scaffold-eth";

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const RainbowKitCustomConnectButton = () => {
  useAutoConnect();
  const networkColor = useNetworkColor();
  const configuredNetwork = getTargetNetwork();
  const { disconnect } = useDisconnect();
  const { switchNetwork } = useSwitchNetwork();
  const [addressCopied, setAddressCopied] = useState(false);

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain;
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined;

        return (
          <div className="container">
            <div className="row">
              <div className="col">
                {(() => {
                  if (!connected) {
                    return (
                      <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                        Connect Wallet
                      </button>
                    );
                  }

                  if (chain.unsupported || chain.id !== configuredNetwork.id) {
                    return (
                      <div className="dropdown dropdown-end">
                        <button type="button" className="btn btn-danger btn-sm dropdown-toggle gap-1">
                          Wrong network
                        </button>
                        <ul className="dropdown-menu p-2 mt-1 shadow dropdown-content menu bg-light rounded-box gap-1">
                          <li>
                            <button
                              className="btn btn-secondary btn-sm rounded-xl flex py-3 gap-3"
                              type="button"
                              onClick={() => switchNetwork?.(configuredNetwork.id)}
                            >
                              <span>
                                Switch to <span className={`text-${networkColor}`}>{configuredNetwork.name}</span>
                              </span>
                            </button>
                          </li>
                          <li>
                            <button
                              className="btn btn-danger btn-sm rounded-xl menu-item flex gap-3 py-3"
                              type="button"
                              onClick={() => disconnect()}
                            >
                              <span>Disconnect</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    );
                  }

                  return (
                      <div className="container">
                        <div className="row">
                          <div className="col">
                            {(() => {
                              if (!connected) {
                                return (
                                    <button className="btn btn-primary btn-sm" onClick={openConnectModal} type="button">
                                      Connect Wallet
                                    </button>
                                );
                              }

                              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                                return (
                                    <div className="dropdown">
                                      <button className="btn btn-danger btn-sm dropdown-toggle" type="button">
                                        Wrong network
                                      </button>
                                      <ul className="dropdown-menu mt-1 shadow" role="menu">
                                        <li>
                                          <button className="btn btn-sm btn-danger btn-rounded flex py-3 gap-3" type="button" onClick={() => switchNetwork?.(configuredNetwork.id)}>
                                            Switch to <span style={{ color: networkColor }}>{configuredNetwork.name}</span>
                                          </button>
                                        </li>
                                        <li>
                                          <button className="btn btn-sm btn-outline-danger btn-rounded flex gap-3 py-3" type="button" onClick={() => disconnect()}>
                                            Disconnect
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                );
                              }

                              return (
                                  <div className="px-2 d-flex justify-content-end align-items-center">
                                    <div className="d-flex flex-column align-items-center mr-1">
                                      {/* Implement the Balance component here */}
                                      <span className="text-xs" style={{ color: networkColor }}>
                {chain.name}
              </span>
                                    </div>
                                    <div className="dropdown">
                                      <button className="btn btn-secondary btn-sm pl-0 pr-2 shadow dropdown-toggle gap-0 h-auto">
                                        {/* Implement the BlockieAvatar component here */}
                                        <span className="ml-2 mr-1">{account.displayName}</span>
                                      </button>
                                      <ul className="dropdown-menu dropdown-menu-end mt-2 shadow" role="menu">
                                        <li>
                                          {addressCopied ? (
                                              <div className="btn btn-secondary btn-sm btn-rounded flex gap-3 py-3">
                                                Copy address
                                              </div>
                                          ) : (
                                              <CopyToClipboard text={account.address} onCopy={() => { setAddressCopied(true); setTimeout(() => { setAddressCopied(false); }, 800); }}>
                                                <div className="btn btn-secondary btn-sm btn-rounded flex gap-3 py-3">
                                                  Copy address
                                                </div>
                                              </CopyToClipboard>
                                          )}
                                        </li>
                                        <li>
                                          <label htmlFor="qrcode-modal" className="btn btn-secondary btn-sm btn-rounded flex gap-3 py-3">
                                            View QR Code
                                          </label>
                                        </li>
                                        <li>
                                          <button className="btn btn-sm btn-secondary btn-rounded menu-item flex gap-3 py-3" type="button">
                                            <a target="_blank" href={blockExplorerAddressLink} rel="noopener noreferrer" className="whitespace-nowrap">
                                              View on Block Explorer
                                            </a>
                                          </button>
                                        </li>
                                        <li>
                                          <button className="btn btn-danger btn-sm btn-rounded menu-item flex gap-3 py-3" type="button" onClick={() => disconnect()}>
                                            Disconnect
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <input type="checkbox" id="qrcode-modal" className="modal-toggle" />
                                      <label htmlFor="qrcode-modal" className="modal cursor-pointer">
                                        <label className="modal-box">
                                          {/* dummy input to capture event onclick on modal box */}
                                          <input className="h-0 w-0 position-absolute top-0 left-0" />
                                          <label htmlFor="qrcode-modal" className="btn btn-ghost btn-sm btn-circle position-absolute top-3 right-3">
                                            ✕
                                          </label>
                                          <div className="space-y-3 py-6">
                                            <div className="d-flex flex-column align-items-center gap-6">
                                              {/* Implement the QRCodeSVG component here */}
                                              {/* Implement the Address component here */}
                                            </div>
                                          </div>
                                        </label>
                                      </label>
                                    </div>
                                  </div>
                              );
                            })()}
                          </div>
                        </div>
                      </div>

                  );
                })()}
              </div>
            </div>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
