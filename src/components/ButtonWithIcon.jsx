const ButtonWithIcon = ({ imgPath, text, onClick }) => {
    return (
        <button className="btn-with-icon" onClick={onClick}>
            <img src={imgPath} alt="google-icon" width={24} height={24} className="object-contain" />
            <span className="font-medium text-base">{text}</span>
        </button>
    )
}

export default ButtonWithIcon