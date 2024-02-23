import React from "react";

interface layoutProps {
    children: React.ReactNode
}

const layout: React.FC<layoutProps> = ({ children }) => {
    return <div className="flex-center min-h-screen w-full ">{children}</div>;
};

export default layout;