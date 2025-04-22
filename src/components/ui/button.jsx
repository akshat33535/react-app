export const Button = ({ children, onClick, variant = "default" }) => {
  const styles = variant === "outline"
    ? "px-4 py-2 border border-gray-500 rounded hover:bg-gray-100"
    : "px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700";
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
};