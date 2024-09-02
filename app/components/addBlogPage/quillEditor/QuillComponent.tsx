import { ClientOnly } from 'remix-utils/client-only';
import Quill from './quill.client';
import 'quill/dist/quill.snow.css';

interface Props {
    setContent: (content: string) => void;
}

export default function QuillComponent({ setContent }: Props) {
    const defaultContent = `
   
        <p class="text-right  italic font-semibold"></p>
    `;

    return (
        <div className="m-2 bg-sky-900 ql-editor-width">
            <ClientOnly>
                {() => <Quill setContent={setContent} defaultValue={defaultContent} />}
            </ClientOnly>
        </div>
    );
}
