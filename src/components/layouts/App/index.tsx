import Navbar from "@/components/layouts/App/Navbar";
import React from "react";
import {useRouter} from "next/router";

type AppLayoutProps = {
    children: React.ReactNode;
}

export default function AppLayout (props: AppLayoutProps) {
    const { children } = props;
    const { pathname } = useRouter();
    const disableNavbar: string[] = ["/auth/login", "/auth/register", "/404"];
    return (
        <main>
            { !disableNavbar.includes(pathname) && <Navbar />}
            { children }
        </main>
    )
}