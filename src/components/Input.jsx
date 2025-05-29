const Input = ({ type, value, setValue, placeholder, className, required = false }) => {
    return (
        <input type={type} className={`${className ?? className}`} placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} required={required} />
    )
}

export default Input