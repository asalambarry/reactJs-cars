/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
function MyHeaders({ myStyle, children }) {
    return (
        <h1 style={{ color: myStyle }}>{children}</h1>
    )
}
export default MyHeaders