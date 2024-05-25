
const SectionTitle = ({ message, heading }) => {
    return (
        <div className="w-fit mx-auto text-center py-4">
            <h2 className="text-[#D99904] text-[18px]">---{message}---</h2>
            <div className="divider"></div> 
            <h1 className="text-xl md:text-[36px] px-6 text-[#151515] uppercase">{heading}</h1>
            <div className="divider"></div>  
        </div>
    );
};

export default SectionTitle;