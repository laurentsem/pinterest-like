import React, { Component } from 'react';
import {Image} from 'cloudinary-react';
import {CloudinaryContext, Transformation} from 'cloudinary-react';
import('cloudinary');

class test extends Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <CloudinaryContext cloudName="dp2k3zmzy">
                    <Image publicId="sample">
                        <Transformation width="200" crop="scale" angle="10"/>
                    </Image>
                </CloudinaryContext>
                <button id="upload_widget" className="cloudinary-button">Upload files</button>

                <script src="https://widget.cloudinary.com/v2.0/global/all.js" type="text/javascript"/>

                <script type="text/javascript">
                    var myWidget = cloudinary.createUploadWidget({
                    cloudName: 'my_cloud_name',
                    uploadPreset: 'my_preset'}, (error, result
                ) => {
                    if (!error && result && result.event === "success") {
                    console.log('Done! Here is the image info: ', result.info);
                }
                }
                    )

                    document.getElementById("upload_widget").addEventListener("click", function (){
                    myWidget.open();
                }, false
                )
                ;
                </script>
            </div>
        )
    }
}

export default test;
