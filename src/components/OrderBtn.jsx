export default function OrderBtn({children,className}){
    return (
       <>
        <button className={`bg-gray-800  text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300 ${className}`}>{children}</button>
        </>
    );
}