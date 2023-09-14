import type {NextPage} from "next";
import Sidebar from "~~/components/dashboard/Sidebar";
import React from "react";
import ProfileHero from "~~/components/dashboard/ProfileHero";
import ProfileSidebar from "~~/components/dashboard/ProfileContent";

const Dashboard: NextPage = () => {
    return (
        <div className="margin-top-100">
            <ProfileHero/>
            <ProfileSidebar/>
        </div>
    );
};

export default Dashboard;
