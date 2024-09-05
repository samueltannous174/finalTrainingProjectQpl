
type Props = {
    htmlString: string;
};

function HtmlRenderer({ htmlString }: Props) {
    return (
        <div className="ql-editor "
            dangerouslySetInnerHTML={{ __html: htmlString }}>
        </div>
    );
}

export default HtmlRenderer;



