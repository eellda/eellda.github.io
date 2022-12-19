const blogTitleField = document.querySelector('.title');
const articleFeild = document.querySelector('.article');

// banner
const bannerImage = document.querySelector('#banner-upload');
const banner = document.querySelector('.banner');
let bannerPath;

const publishBtn = document.querySelector('.publish-btn');
const uploadInput = document.querySelector('#image-upload');

bannerImage.addEventListener('change', () => {
    uploadImage(bannerImage, 'banner');
})

const uploadImage = (uploadFile, uploadType) => {
    const [file] = uploadFile.files;
    //console.log([file]);
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        console.log(formdata);
        formdata.append("image", file);

        fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json()).then(data => {
            bannerPath = `${location.origin}/${data}`;
            banner.style.backgroundImage = `url("${bannerPath}")`;
        })

        // https://www.youtube.com/watch?v=AWHGQfzfHxI 30:00
        // npm install xpress-fileupload
    }
}