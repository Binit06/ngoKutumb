export interface Post {
    post_content: string;
    post_id: string;
    hashtags: string[];
    post_images: string[] | [];
    user_id: string;
    post_type: string;
    liked_users: { user_id: string }[];
    likes: number;
    post_title: string;
    timestamp: { _seconds: number; _nanoseconds: number };
  }
  
  const getPost = async (page: string): Promise<Post[]> => {
    const response = await fetch(`https://ngo-api.vercel.app/api/getpost/all?page=${page}`, {
      method: 'GET'
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
  
    const data = await response.json();
    return data.posts as Post[];
  };

  export default getPost
  