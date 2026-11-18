
const Crosshair = () => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none z-10 flex items-center justify-center">
            <div className="w-1 h-3 bg-white absolute mix-blend-difference" />
            <div className="w-3 h-1 bg-white absolute mix-blend-difference" />
        </div>
    )
}

export default Crosshair
