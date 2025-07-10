"use client";
import { motion } from "framer-motion";
import { Button } from "@radix-ui/themes";
import { clsx } from "clsx";

export function AnimatedBtn(props: React.ComponentProps<typeof Button>) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button {...props} className={clsx("px-6 py-3", props.className)}>
        {props.children}
      </Button>
    </motion.div>
  );
}
