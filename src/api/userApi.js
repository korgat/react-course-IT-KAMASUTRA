import * as axios from "axios"


const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "6db48472-7e9b-4cf4-ae84-93f951e67dd8"
	}

})


export const userApi = {
	getUsers(currentPage, itemsInPage) {
		return instance.get(`users?page=${currentPage}&count=${itemsInPage}`)
			.then(response => {
				return response.data
			})
	}
}

export const followApi = {
	unfollowUser(userId) {
		return instance.delete(`follow/${userId}`)
			.then(response => {
				return response.data
			})
	},
	followUser(userId) {
		return instance.post(`follow/${userId}`)
			.then(response => {
				return response.data
			})
	}
}

export const profileApi = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
			.then(response => {
				return response.data
			})
	},
	getStatus(userId) {
		return instance.get(`/profile/status/${userId}`)
			.then(response => {
				return response.data
			})
	},
	updateStatus(status) {
		return instance.put(`/profile/status`, {
			status: status
		})
			.then(response => {
				return response.data
			})
	},
	updateProfileData(formData) {
		return instance.put(`/profile`, formData)
			.then(response => {
				return response.data
			})
	},
	uploadPhoto(file) {
		const formData = new FormData()
		formData.append("image", file)
		return instance.put(`/profile/photo`, formData, {
			headers: {
				"Content-Type": "multipart/form-data"
			}
		})
			.then(response => {
				return response.data
			})
	}

}
export const authApi = {
	auth() {
		return instance.get(`auth/me`,)
			.then(response => {
				return response.data
			})
	},
	login(formData) {
		return instance.post("/auth/login", {
			...formData
		}).then(response => {
			return response.data
		})
	},
	logout() {
		return instance.delete("/auth/login").then(response => {
			return response.data
		})
	}
}