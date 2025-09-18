import React from 'react'

interface ButtonProps
{
    title: string
}
function Button({title}: ButtonProps) {
  return (
    <button
      className="rounded-full cursor-pointer text-black bg-teal-300 px-6 py-4 hover:bg-teal-200 transition font-semibold"
      title="Start using Nexo"
    >
      {title}
    </button>
  );
}

export default Button
