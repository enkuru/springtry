export const emptyUser = {
  id: undefined,
  name: "",
  surname: "",
  username: "",
  email: "",
  password: "password",
  role: {id: 1}
};

export const emptyHashTag = {id: undefined, name: ""};
export const emptyCategory = {id: undefined, name: "", parentCategoryId: undefined, parentCategoryName: ""};
export const emptyPost = {id: undefined, subject: "", content: "", categoryId: 0, categoryName: "", tags: []};