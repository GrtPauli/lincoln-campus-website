export default function StyledUnderline({ color = "bg-primary", height = "h-[3px]" }) {
  return (
    <div className={`mt-2 w-full ${height} ${color} rounded-full`}></div>
  );
}
