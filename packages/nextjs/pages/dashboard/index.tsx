import type {NextPage} from "next";
import Sidebar from "~~/components/dashboard/Sidebar";
import React from "react";
import ProfileHero from "~~/components/dashboard/ProfileHero";
import ProfileContent from "~~/components/dashboard/ProfileContent";

const Dashboard: NextPage = () => {
    return (
        <div className="margin-top-100">
            <ProfileHero/>
            <ProfileContent/>
        </div>
    );
};

export default Dashboard;
