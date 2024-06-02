const FormLayout = ({ children, func }) => (
    <div className="max-w-[540px] w-full">
        <form className="w-full flex flex-col" onSubmit={func}>{children}</form>
    </div>
)
export default FormLayout;