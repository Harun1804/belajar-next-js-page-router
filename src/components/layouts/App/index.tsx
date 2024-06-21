import Navbar from "@/components/layouts/App/Navbar";
import React from "react";

type AppLayoutProps = {
    children: React.ReactNode;
}

export default function AppLayout (props: AppLayoutProps) {
    const { children } = props;
    return (
        <main>
            <Navbar />
            { children }
        </main>
    )
}