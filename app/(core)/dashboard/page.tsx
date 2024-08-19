"use client";

import { Button } from '@/components/ui/button';
import { TypographySmall } from '@/components/ui/typography';
import { UploadButton, UploadDropzone } from '@/lib/uploadthing';
import { signOut, useSession } from 'next-auth/react';
import React from 'react'

function Dashboard() {

    const session = useSession();
    return (

        <main className="flex min-h-screen flex-col items-center p-24">
            <UploadDropzone
                endpoint="imageUploader"
                onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    alert("Upload Completed");
                }}
                onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                }}
            />

            <Button onClick={() => signOut()}>
                signout
            </Button>

            <TypographySmall>
                {JSON.stringify(session.data?.user)}
            </TypographySmall>
        </main>
    )
}

export default Dashboard