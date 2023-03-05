export class MembersModel {
    id;
    name;
    description;
    imageUrl;
    position;

    constructor() {}

    setId(id){
        this.id = id;
    }
    setName(name){
        this.name = name;
    }
    setDescription(description){
        this.description = description;
    }
    setImageUrl(imageUrl){
        this.imageUrl = imageUrl;
    }
    setPosition(position){
        this.position = position;
    }
}