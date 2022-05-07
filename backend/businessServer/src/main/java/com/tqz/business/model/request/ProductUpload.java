package com.tqz.business.model.request;


public class ProductUpload {
    private String name;
    private String[] categories;
    private String[] tags;
    private String image;

    public ProductUpload() {}

    public ProductUpload(String name, String[] categories, String[] tags, String image) {
        this.name = name;
        this.categories = categories;
        this.tags = tags;
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String[] getCategories() {
        return categories;
    }

    public void setCategories(String[] categories) {
        this.categories = categories;
    }

    public String[] getTags() {
        return tags;
    }

    public void setTags(String[] tags) {
        this.tags = tags;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
