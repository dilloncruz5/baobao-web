import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function LoadingScreen({
    onFinish,
}: {
    onFinish: () => void;
}) {
    const [exit, setExit] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setExit(true);

            setTimeout(() => {
                onFinish();
            }, 800);
        }, 2200);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <AnimatePresence>
            {!exit && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background overflow-hidden"
                    exit={{
                        opacity: 0,
                        scale: 1.05,
                        filter: "blur(10px)",
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    {/* Atmospheric Theme Backgrounds */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <motion.div
                            className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-gradient-ember opacity-20 blur-[100px]"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.25, 0.1] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div
                            className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-amber opacity-20 blur-[100px]"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        <motion.img
                            src="/logo.png"
                            alt="Bao Bao Logo"
                            className="w-48 md:w-64 mb-10 drop-shadow-2xl"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Elegant Progress Line */}
                        <div className="w-56 h-1 bg-muted rounded-full overflow-hidden relative shadow-inner">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-warm rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 2.2, ease: "easeInOut" }}
                            />
                        </div>

                        <motion.div
                            className="mt-8 font-brand text-xl tracking-[0.2em] text-primary uppercase flex items-center gap-1"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                        >
                            Loading
                            <span className="flex gap-0.5 ml-1">
                                <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0 }}>.</motion.span>
                                <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0.2 }}>.</motion.span>
                                <motion.span animate={{ opacity: [0.2, 1, 0.2] }} transition={{ duration: 1.4, repeat: Infinity, delay: 0.4 }}>.</motion.span>
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}