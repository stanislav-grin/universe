interface MoonProps {
  title: string
  selected: boolean
  onClick: () => void
}

export const Moon = ({ title, onClick, selected }: MoonProps) => (
  <button
    onClick={onClick}
    aria-pressed={selected}
    className={`
        flex items-center justify-center ml-[50px] w-[80px] h-[80px] text-[white] cursor-pointer shrink-0 rounded-full transition-colors duration-150
        ${selected ? 'bg-orange-500 hover:bg-orange-600' : 'bg-purple-600 hover:bg-purple-700'}
      `}
  >
    {title}
  </button>
)
