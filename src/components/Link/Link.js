
const Links = ({href, children, color}) => {
    return (
        <a href={href} style={{color: color}}>{children}</a>
    )
}

export {Links}