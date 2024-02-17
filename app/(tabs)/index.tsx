import { View } from '@/components/Themed';
import NormalPost from '@/components/posts/normal/NormalPost';
import getPost, { Post } from '@/hooks/getPosts';
import { useEffect, useMemo, useState } from 'react';

export default function TabOneScreen() {
  const [postData, setPostData] = useState<Post[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost('1');
        setPostData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [postData]);

  const memoizedPostData = useMemo(() => postData, [postData]);
  return (
    <View>
      {memoizedPostData.map((values, index) => (
        <NormalPost key={values.post_id} post_id={values.post_id} captions={values.post_content} imgURL={values.post_images[0]}/>
      ))}
    </View>
  );
}

