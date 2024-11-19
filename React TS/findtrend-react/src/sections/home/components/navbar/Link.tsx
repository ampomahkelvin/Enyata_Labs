type Props = {
    page: string;
}

const Link = ({page}: Props) => {
  return (
    <li className="text-white gap-2">
        {page}
    </li>
  )
}

export default Link