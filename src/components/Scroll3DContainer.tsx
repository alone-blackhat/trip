/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { motion } from 'motion/react';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Scroll3DContainer({ children, className = '', id }: Props) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 100, rotateX: 22, transformPerspective: 1200 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
      className={`origin-center ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </motion.div>
  );
}
