
type Props = {
    htmlString: string;
};

function HtmlRenderer({ htmlString }: Props) {
    return (
        <div
            dangerouslySetInnerHTML={{ __html: htmlString }}
        />
    );
}

export default HtmlRenderer;

