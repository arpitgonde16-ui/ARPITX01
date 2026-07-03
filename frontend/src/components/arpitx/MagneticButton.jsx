import React, { useRef } from "react";

export default function MagneticButton({
  children,
  as: Tag = "a",
  className = "",
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = e.clientX - r.left;
    const my = e.clientY - r.top;
    const cx = r.width / 2;
    const cy = r.height / 2;
    el.style.transform = `translate(${(mx - cx) * strength}px, ${(my - cy) * strength}px)`;
    el.style.setProperty("--mx", `${(mx / r.width) * 100}%`);
    el.style.setProperty("--my", `${(my / r.height) * 100}%`);
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`btn-magnetic inline-flex items-center gap-3 ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
