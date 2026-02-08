import { Link, useLocation } from "react-router-dom";
import { HomeIcon } from "../assets/icons/HomeIcon";
import { GlossIcon } from "../assets/icons/GlossIcon";
import { StarIcon } from "../assets/icons/StarIcon";
import { InfoIcon } from "../assets/icons/InfoIcon";

const Sidebar = () => {
    const location = useLocation();

    const navItems = [
        { path: "/", icon: HomeIcon },
        { path: "/my-values", icon: StarIcon },
        { path: "/why-gloss", icon: GlossIcon },
        { path: "/about", icon: InfoIcon },
    ];

    return (
        <nav className="fixed left-0 top-0 h-screen w-16 bg-white border-r border-gray-100 rounded-r-xl flex flex-col items-center py-8 z-50 justify-center">
            <div className="flex flex-col gap-6">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`p-2 rounded-2xl transition-all duration-300 ${isActive
                                ? "bg-accent text-white"
                                : "text-gray-400 hover:bg-gray hover:text-gray-600"
                                }`}
                        >
                            <Icon className="w-6 h-6" />
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Sidebar;