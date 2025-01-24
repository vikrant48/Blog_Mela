import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

function RTE({ name, control, label, defaultValue = "", rules = {} }) {
    return (
        <div className='w-full'>
            {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

            <Controller
                name={name || "content"}
                control={control}
                rules={rules}
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                    <div>
                        <Editor
                            // apiKey= {import.meta.env.VITE_RTE_API_KEY  || cecbjduh7ffo9nd53tgj6j2iy4jkldjjrpln9r2if63taqic}
                            apiKey='cecbjduh7ffo9nd53tgj6j2iy4jkldjjrpln9r2if63taqic'
                            value={value || defaultValue}  
                            init={{
                                height: 500,
                                menubar: true,
                                plugins: [
                                    "image",
                                    "advlist",
                                    "autolink",
                                    "lists",
                                    "link",
                                    "image",
                                    "charmap",
                                    "preview",
                                    "anchor",
                                    "searchreplace",
                                    "visualblocks",
                                    "code",
                                    "fullscreen",
                                    "insertdatetime",
                                    "media",
                                    "table",
                                    "code",
                                    "help",
                                    "wordcount",
                                    "anchor",
                                ],
                                toolbar:
                                    "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
                                content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                            }}
                            onEditorChange={onChange}
                        />
                        {error && <p className="text-red-600 mt-2">{error.message}</p>}  
                    </div>
                )}
            />
        </div>
    )
}

export default RTE
