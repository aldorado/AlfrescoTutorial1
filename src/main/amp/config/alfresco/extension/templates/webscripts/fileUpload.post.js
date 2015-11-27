var filename = null;
var content = null;
var title = "";
var description = "";

// locate file attributes
var status = {
    "status":"error"
};

// locate file attributes



if (formdata.fields[0].name == "file" && formdata.fields[0].isFile){
    filename = formdata.fields[0].filename;
    content = formdata.fields[0].content;
}


// ensure mandatory file attributes have been located
if (filename == undefined || content == undefined)
{
    status.code = 400;
    status.message = "Uploaded file cannot be located in request";
    status.redirect = true;
}
else
{
    // create document in company home for uploaded file
    upload = companyhome.createFile("upload" + companyhome.children.length + "_" + filename,"mu:Arbeitsschritt") ;

    upload.properties.content.write(content);
    upload.properties.content.setEncoding("UTF-8");
    upload.properties.content.guessMimetype(filename);

    //upload.properties.title = title;
    //upload.properties.description = description;
    upload.save();

    //status.status = formdata.fields[0].filename;
    status.status = upload.nodeRef;
    //status.status = search.findNode(upload.nodeRef).webdavUrl;

    model.status = jsonUtils.toJSONString(status);
    // setup model for response template*/
    //model.status = upload.nodeRef;
}