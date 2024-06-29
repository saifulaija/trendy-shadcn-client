
// import { TQueryParam, TResponseRedux } from "../../../types/global.type";
import { baseApi } from "../../api/baseApi";
// import { TUser } from "../auth/authSlice";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (userInfo) => {
        console.log("register", userInfo);
        return {
          url: "users/create-user",
          method: "POST",
          body: userInfo,
        };
      },
      invalidatesTags: ["user"],
    }),

    getAllUser: builder.query({
      query: () => {
        return {
          url: "/users",
          method: "GET",
        };
      },
    }),

    updateUser: builder.mutation({
      query: (options) => ({
        url: `/users/${options.id}`,
        method: "PATCH",
        body: options.data,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete-user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useCreateUserMutation,
 useGetAllUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
