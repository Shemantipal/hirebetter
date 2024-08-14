import { Dock, DockIcon } from "@/components/ui/dock";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { BackpackIcon, BookmarkFilledIcon, HomeIcon, RocketIcon } from "@radix-ui/react-icons";
import { NotebookIcon } from "lucide-react";


const navbar = [
    {
        label: "Home",
        href: "/",
        icon: HomeIcon,
    },
    {
        label: "Job Feed",
        href: "/jobs",
        icon: BackpackIcon,
    },
];

const secondary = [
    {
        label: "Resume Review",
        href: "/tools/resume-review",
        icon: RocketIcon,
    },
    {
        label: "Recruiter",
        href: "/tools/recruiter-list",
        icon: NotebookIcon,
    },
    {
        label: "Discover Projects",
        href: "/projects",
        icon: BookmarkFilledIcon,
    }
];

export default function Navbar() {
    return (
        <div className="pointer-events-none fixed inset-x-0 bottom-20 z-30 mx-auto mb-4 flex origin-bottom h-full max-h-14">
            <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
            <Dock
                direction="middle"
                className="z-50 pointer-events-auto relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] "
            >
                {navbar.map((item) => (
                    <DockIcon key={item.href}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12 rounded-full"
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-schoolbell">
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full" />
                {secondary.map((item) => (
                    <DockIcon key={item.href}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Link
                                    href={item.href}
                                    className={cn(
                                        buttonVariants({ variant: "ghost", size: "icon" }),
                                        "size-12"
                                    )}
                                >
                                    <item.icon className="size-4" />
                                </Link>
                            </TooltipTrigger>
                            <TooltipContent className="font-schoolbell">
                                <p>{item.label}</p>
                            </TooltipContent>
                        </Tooltip>
                    </DockIcon>
                ))}
                <Separator orientation="vertical" className="h-full py-2" />
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ModeToggle />
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Theme</p>
                        </TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </div>
    );
}
