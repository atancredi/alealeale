import type { PropsWithChildren } from "react";

export default function FullScreenMobileProvider({ children }: PropsWithChildren) {
    return (
        <div className="fixed inset-0 h-dvh w-full overflow-hidden overscroll-none select-none touch-none">
            <div className="h-full w-full overflow-y-auto touch-pan-y">
                {children}
            </div>
        </div>
    );
}