import { Page, Grid, Card, Frame } from "@shopify/polaris";
import { useState } from "react";
import { Form } from "@remix-run/react";
import { TextEditor } from "~/components/texteditor";

function CreateBlog() {
    const [textEditor, setTextEditor] = useState("");
    return (
        <Page>
            <Grid>
                <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 6 }}>
                    <Frame>
                        <Card>
                            <Form method="post">
                                <TextEditor
                                    theme="snow"
                                    placeholder="Write description"
                                    onChange={setTextEditor}
                                    value={textEditor}
                                />

                                <input type="hidden" name="textEditor" value={textEditor} />
                                <br />
                                <button type="submit">Submit</button>
                            </Form>
                        </Card>
                    </Frame>
                </Grid.Cell>
            </Grid>
        </Page>
    );
}

export default CreateBlog;