const GetApiUserDataUserGet = {"response":{"200":{"properties":{"id":{"type":"string","title":"Id"},"email":{"type":"string","title":"Email"},"balance":{"type":"number","title":"Balance"}},"type":"object","required":["id","email","balance"],"title":"User","$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetCreationCreationsCreationIdGet = {"metadata":{"allOf":[{"type":"object","properties":{"creation_id":{"type":"integer","title":"Creation Id","$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":["creation_id"]}]},"response":{"200":{"properties":{"id":{"type":"integer","title":"Id"},"status":{"type":"string","enum":["submitted","in progress","completed","failed"],"title":"Status","description":"`submitted` `in progress` `completed` `failed`"},"prompt":{"type":"string","title":"Prompt"},"negativePrompt":{"type":"string","title":"Negativeprompt"},"width":{"type":"integer","title":"Width"},"height":{"type":"integer","title":"Height"},"highResolution":{"type":"boolean","title":"Highresolution"},"seed":{"type":"integer","title":"Seed"},"steps":{"type":"integer","title":"Steps"},"model":{"type":"string","enum":["lyra","hydra","fantasy","portrait","inpunk","abstractWorld","anime","argo","cinematic","photography","scifi","detailedIllustration","3dIllustration","flatIllustration","realvisxl","stylevisionxl","animaginexl","anime_2","anime_stylized","anime_vintage","pixelart"],"title":"Model","description":"creation's model or style\n\n`lyra` `hydra` `fantasy` `portrait` `inpunk` `abstractWorld` `anime` `argo` `cinematic` `photography` `scifi` `detailedIllustration` `3dIllustration` `flatIllustration` `realvisxl` `stylevisionxl` `animaginexl` `anime_2` `anime_stylized` `anime_vintage` `pixelart`"},"initialImage":{"type":"string","title":"Initialimage","description":"URL of the used initial image (if any)"},"initialImageMode":{"type":"string","enum":["color","structure","depth","scribble"],"title":"Initialimagemode","description":"Only available with initial images\n\n`color` `structure` `depth` `scribble`"},"initialImageStrength":{"type":"integer","title":"Initialimagestrength","description":"Only available with initial images"},"createdAt":{"type":"string","format":"date-time","title":"Createdat"},"updatedAt":{"type":"string","format":"date-time","title":"Updatedat"},"images":{"items":{"properties":{"id":{"type":"integer","title":"Id"},"url":{"type":"string","title":"Url"}},"type":"object","title":"Variation"},"type":"array","title":"Images","description":"`null` if expired (24 hours after creation)"},"expired":{"type":"boolean","title":"Expired","description":"Creation is expired if it's been more than 24 hours since it was created, images will be deleted after 24 hours"}},"type":"object","required":["id","status","prompt","width","height","highResolution","seed","steps","model","createdAt","updatedAt","images","expired"],"title":"Creation","$schema":"https://json-schema.org/draft/2020-12/schema#"},"422":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const GetCreationsCreationsGet = {"metadata":{"allOf":[{"type":"object","properties":{"cursor":{"type":"integer","title":"Cursor","$schema":"https://json-schema.org/draft/2020-12/schema#"},"limit":{"type":"integer","title":"Limit","default":50,"$schema":"https://json-schema.org/draft/2020-12/schema#"},"offset":{"type":"integer","title":"Offset","default":0,"$schema":"https://json-schema.org/draft/2020-12/schema#"}},"required":[]}]},"response":{"200":{"items":{"properties":{"id":{"type":"integer","title":"Id"},"status":{"type":"string","enum":["submitted","in progress","completed","failed"],"title":"Status","description":"`submitted` `in progress` `completed` `failed`"},"prompt":{"type":"string","title":"Prompt"},"negativePrompt":{"type":"string","title":"Negativeprompt"},"width":{"type":"integer","title":"Width"},"height":{"type":"integer","title":"Height"},"highResolution":{"type":"boolean","title":"Highresolution"},"seed":{"type":"integer","title":"Seed"},"steps":{"type":"integer","title":"Steps"},"model":{"type":"string","enum":["lyra","hydra","fantasy","portrait","inpunk","abstractWorld","anime","argo","cinematic","photography","scifi","detailedIllustration","3dIllustration","flatIllustration","realvisxl","stylevisionxl","animaginexl","anime_2","anime_stylized","anime_vintage","pixelart"],"title":"Model","description":"creation's model or style\n\n`lyra` `hydra` `fantasy` `portrait` `inpunk` `abstractWorld` `anime` `argo` `cinematic` `photography` `scifi` `detailedIllustration` `3dIllustration` `flatIllustration` `realvisxl` `stylevisionxl` `animaginexl` `anime_2` `anime_stylized` `anime_vintage` `pixelart`"},"initialImage":{"type":"string","title":"Initialimage","description":"URL of the used initial image (if any)"},"initialImageMode":{"type":"string","enum":["color","structure","depth","scribble"],"title":"Initialimagemode","description":"Only available with initial images\n\n`color` `structure` `depth` `scribble`"},"initialImageStrength":{"type":"integer","title":"Initialimagestrength","description":"Only available with initial images"},"createdAt":{"type":"string","format":"date-time","title":"Createdat"},"updatedAt":{"type":"string","format":"date-time","title":"Updatedat"},"images":{"items":{"properties":{"id":{"type":"integer","title":"Id"},"url":{"type":"string","title":"Url"}},"type":"object","title":"Variation"},"type":"array","title":"Images","description":"`null` if expired (24 hours after creation)"},"expired":{"type":"boolean","title":"Expired","description":"Creation is expired if it's been more than 24 hours since it was created, images will be deleted after 24 hours"}},"type":"object","required":["id","status","prompt","width","height","highResolution","seed","steps","model","createdAt","updatedAt","images","expired"],"title":"Creation"},"type":"array","title":"Response Get Creations Creations  Get","$schema":"https://json-schema.org/draft/2020-12/schema#"},"422":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
const NewCreationCreationsPost = {"body":{"properties":{"prompt":{"type":"string","maxLength":765,"minLength":3,"title":"Prompt","description":"image(s) description"},"negativePrompt":{"type":"string","maxLength":765,"title":"Negativeprompt","description":"content to avoid/remove from the image(s)"},"model":{"type":"string","enum":["lyra","hydra","fantasy","portrait","inpunk","abstractWorld","anime","argo","cinematic","photography","scifi","detailedIllustration","3dIllustration","flatIllustration","realvisxl","stylevisionxl","animaginexl","anime_2","anime_stylized","anime_vintage","pixelart"],"title":"Model","description":"creation's model or style","default":"lyra"},"aspectRatio":{"type":"string","enum":["square","landscape","smallPortrait","portrait","wide"],"title":"Aspectratio","description":"image's aspect ratio: `square`: 1:1, `landscape`: 16:9, `smallPortrait`: 4:5, `portrait`: 9:16, `wide`: 21:9","default":"square"},"highResolution":{"type":"boolean","title":"Highresolution","description":"high resolution images have different dimensions and include more details, see pricing","default":false},"images":{"type":"integer","maximum":12,"minimum":1,"title":"Images","description":"Number of variations/images to generate, see pricing","default":4},"seed":{"type":"integer","title":"Seed","description":"Random if not provided, seed value is deterministic, same seed will produce the same result"},"steps":{"type":"integer","maximum":150,"minimum":1,"title":"Steps","description":"The number of iterations/steps to run the model for. Higher iterations likely produce better results but take longer to run","default":20},"initialImageUrl":{"type":"string","title":"Initialimageurl","description":"Public URL of an image to start with, max `10MB`, mutally exclusive with `initialImageEncoded`"},"initialImageEncoded":{"type":"string","title":"Initialimageencoded","description":"Base64 encoded image to start with, max `10MB`, mutally exclusive with `initialImageUrl`"},"initialImageMode":{"type":"string","enum":["color","structure","depth","scribble"],"title":"Initialimagemode","description":"Ignored if `initialImageEncoded` or `initialImageUrl` is not provided, `color` preserves the color of the initial image, `structure` preserves the structure of the initial image, `depth` preserves the depth of the initial image, `scribble` preserves the structure of the initial image but with a more abstract look","default":"color"},"initialImageStrength":{"type":"integer","maximum":100,"minimum":0,"title":"Initialimagestrength","description":"How much the initial image influences the result, `0` ignores the initial image, `100` produces a result that is very similar to the initial image"}},"type":"object","required":["prompt"],"title":"NewCreation","$schema":"https://json-schema.org/draft/2020-12/schema#"},"response":{"200":{"properties":{"id":{"type":"integer","title":"Id"},"status":{"type":"string","enum":["submitted","in progress","completed","failed"],"title":"Status","description":"`submitted` `in progress` `completed` `failed`"},"prompt":{"type":"string","title":"Prompt"},"negativePrompt":{"type":"string","title":"Negativeprompt"},"width":{"type":"integer","title":"Width"},"height":{"type":"integer","title":"Height"},"highResolution":{"type":"boolean","title":"Highresolution"},"seed":{"type":"integer","title":"Seed"},"steps":{"type":"integer","title":"Steps"},"model":{"type":"string","enum":["lyra","hydra","fantasy","portrait","inpunk","abstractWorld","anime","argo","cinematic","photography","scifi","detailedIllustration","3dIllustration","flatIllustration","realvisxl","stylevisionxl","animaginexl","anime_2","anime_stylized","anime_vintage","pixelart"],"title":"Model","description":"creation's model or style\n\n`lyra` `hydra` `fantasy` `portrait` `inpunk` `abstractWorld` `anime` `argo` `cinematic` `photography` `scifi` `detailedIllustration` `3dIllustration` `flatIllustration` `realvisxl` `stylevisionxl` `animaginexl` `anime_2` `anime_stylized` `anime_vintage` `pixelart`"},"initialImage":{"type":"string","title":"Initialimage","description":"URL of the used initial image (if any)"},"initialImageMode":{"type":"string","enum":["color","structure","depth","scribble"],"title":"Initialimagemode","description":"Only available with initial images\n\n`color` `structure` `depth` `scribble`"},"initialImageStrength":{"type":"integer","title":"Initialimagestrength","description":"Only available with initial images"},"createdAt":{"type":"string","format":"date-time","title":"Createdat"},"updatedAt":{"type":"string","format":"date-time","title":"Updatedat"},"images":{"items":{"properties":{"id":{"type":"integer","title":"Id"},"url":{"type":"string","title":"Url"}},"type":"object","title":"Variation"},"type":"array","title":"Images","description":"`null` if expired (24 hours after creation)"},"expired":{"type":"boolean","title":"Expired","description":"Creation is expired if it's been more than 24 hours since it was created, images will be deleted after 24 hours"}},"type":"object","required":["id","status","prompt","width","height","highResolution","seed","steps","model","createdAt","updatedAt","images","expired"],"title":"Creation","$schema":"https://json-schema.org/draft/2020-12/schema#"},"422":{"properties":{"detail":{"items":{"properties":{"loc":{"items":{"anyOf":[{"type":"string"},{"type":"integer"}]},"type":"array","title":"Location"},"msg":{"type":"string","title":"Message"},"type":{"type":"string","title":"Error Type"}},"type":"object","required":["loc","msg","type"],"title":"ValidationError"},"type":"array","title":"Detail"}},"type":"object","title":"HTTPValidationError","$schema":"https://json-schema.org/draft/2020-12/schema#"}}} as const
;
export { GetApiUserDataUserGet, GetCreationCreationsCreationIdGet, GetCreationsCreationsGet, NewCreationCreationsPost }
