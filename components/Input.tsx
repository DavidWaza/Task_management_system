import clsx from "clsx";

const Input = ({ className, ...props }: { className: any }) => {
  return (
    <input
      className={clsx(
        "border-solid-gray border-2 px-6 py-2 text-lg rounded-3xl w-full",
        className
      )}
      {...props}
    />
  );
};
