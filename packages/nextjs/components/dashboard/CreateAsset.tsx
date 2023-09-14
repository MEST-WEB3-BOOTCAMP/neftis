import React, {useEffect, useState} from 'react';

const CreateAsset: React.FC = () => {
    useEffect(() => {
        feather.replace();
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        url: '',
        tokenValue: 1
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement your logic to submit data to a smart contract here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="col-12 mt-4">
            <div className="card border-0 rounded shadow">
                <div className="card-body">
                    <h5 className="text-md-start text-center">Asset Details :</h5>

                    <form onSubmit={handleSubmit}>
                        <div className="row mt-4">
                            <div className="col-md-6">
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="user" className="fea icon-sm icons"/>
                                        <input
                                            name="name"
                                            type="text"
                                            className="form-control ps-5"
                                            placeholder="Name :"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <label className="form-label">Token Value :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="aperture" className="fea icon-sm icons"/>
                                        <input
                                            name="tokenValue"
                                            type="number"
                                            inputMode="numeric"
                                            className="form-control ps-5"
                                            placeholder="Token Value :"
                                            value={formData.tokenValue}
                                            onChange={handleChange}
                                            style={{
                                                WebkitAppearance: 'none',
                                                appearance: 'none',
                                                margin: '0'
                                            }}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Url :</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="globe" className="fea icon-sm icons"/>
                                        <input
                                            name="url"
                                            type="url"
                                            className="form-control ps-5"
                                            placeholder="Asset Url :"
                                            value={formData.url}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <div className="form-icon position-relative">
                                        <i data-feather="message-circle" className="fea icon-sm icons"/>
                                        <textarea
                                            name="description"
                                            rows={4}
                                            className="form-control ps-5"
                                            placeholder="Description :"
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 d-flex justify-content-end">
                                <input type="submit" name="send" className="btn btn-primary" value="Add Asset"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAsset;
