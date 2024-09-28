import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import getTranslations from '../utils/translationUtils'; // Adjust the path as needed
import { useLanguage } from '../contexts/LanguageContext'; // Adjust the path as needed

// Sample data for comments with keys for translation
const initialComments = [
  { id: '1', user: 'Alice', commentKey: 'comment1' },
  { id: '2', user: 'Bob', commentKey: 'comment2' },
  { id: '3', user: 'Charlie', commentKey: 'comment3' },
  { id: '4', user: 'Diana', commentKey: 'comment4' },
  { id: '5', user: 'Edward', commentKey: 'comment5' },
];

export default function ForumScreen() {
  const { language } = useLanguage();
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const translations = getTranslations(language);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        { id: String(comments.length + 1), user: 'You', comment: newComment }
      ]);
      setNewComment('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{translations.forum}</Text>

      <View style={styles.commentsContainer}>
        <FlatList
          data={comments}
          renderItem={({ item }) => (
            <View style={styles.commentItem}>
              <Text style={styles.commentUser}>{item.user}:</Text>
              <Text style={styles.commentText}>
                {translations[item.commentKey] || item.comment}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder={translations.addCommentPlaceholder}
          placeholderTextColor="#888"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddComment}>
          <Text style={styles.addButtonText}>{translations.addButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  commentsContainer: {
    flex: 1,
    marginBottom: 20,
  },
  commentItem: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  commentUser: {
    fontWeight: 'bold',
    color: '#333',
  },
  commentText: {
    fontSize: 16,
    color: '#333',
  },
  commentInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    marginRight: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
