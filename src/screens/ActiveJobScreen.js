import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons';

const COLORS = {
  purple: '#6B3BA0',
  green: '#00A651',
  white: '#FFFFFF',
  darkGray: '#333333',
  lightGray: '#F0F0F0',
  border: '#C8C8C8'
};

const TIMELINE_ITEMS = [
  { task: 'Arrived at Site', time: '14:30', completed: true },
  { task: 'Inspection', time: '14:45', completed: true },
  { task: 'Emptying Started', time: '15:00', completed: true },
  { task: 'Emptying in Progress', time: '15:30', completed: true },
  { task: 'Cleanup', time: '15:45', completed: false },
  { task: 'Completion', time: '16:00', completed: false }
];

export default function ActiveJobScreen() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => t + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.purple} />
      
      {/* Header */}
      <LinearGradient
        colors={[COLORS.purple, COLORS.purple]}
        style={styles.header}
      >
        <View style={styles.decorativeDots}>
          {[...Array(12)].map((_, i) => (
            <View key={i} style={styles.dot} />
          ))}
        </View>
        <Text style={styles.headerTitle}>Active Job - Track</Text>
      </LinearGradient>

      {/* Job Status Card */}
      <View style={styles.statusCard}>
        <View style={styles.statusBadge}>
          <Ionicons name="checkmark-circle" size={20} color={COLORS.green} />
          <Text style={styles.statusText}>In Progress</Text>
        </View>
        <View style={styles.jobDetails}>
          <Text style={styles.jobId}>Job #WEY-2024-445</Text>
          <Text style={styles.detailLabel}>Customer: John Doe</Text>
          <Text style={styles.detailLabel}>Location: 123 Avenida Mao</Text>
          <Text style={[styles.detailLabel, { marginTop: 10 }]}>
            ⏱️ Time Elapsed: {formatTime(timer)}
          </Text>
        </View>
      </View>

      {/* Progress Timeline */}
      <View style={styles.timelineSection}>
        <Text style={styles.sectionTitle}>Job Timeline</Text>
        
        {TIMELINE_ITEMS.map((item, index) => (
          <View key={index} style={styles.timelineItem}>
            <View style={styles.timelineLeft}>
              <View style={[
                styles.timelineDot,
                { backgroundColor: item.completed ? COLORS.green : '#D0D0D0' }
              ]} />
              {index < TIMELINE_ITEMS.length - 1 && (
                <View style={[
                  styles.timelineLine,
                  { backgroundColor: item.completed ? COLORS.green : '#D0D0D0' }
                ]} />
              )}
            </View>
            <View style={styles.timelineContent}>
              <Text style={[
                styles.timelineTask,
                { color: item.completed ? COLORS.darkGray : '#999' }
              ]}>
                {item.task}
              </Text>
            </View>
            <Text style={styles.timelineTime}>{item.time}</Text>
          </View>
        ))}
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonsSection}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="call" size={20} color={COLORS.white} />
          <Text style={styles.buttonText}>Call Customer</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="camera" size={20} color={COLORS.white} />
          <Text style={styles.buttonText}>Take Photo</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.completeButton}>
          <Ionicons name="checkmark" size={20} color={COLORS.white} />
          <Text style={styles.buttonText}>Complete Job</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  header: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    marginBottom: 15
  },
  decorativeDots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 15
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.white,
    marginRight: 15,
    marginBottom: 8,
    opacity: 0.6
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white
  },
  statusCard: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15
  },
  statusText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.green,
    marginLeft: 8
  },
  jobDetails: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 15
  },
  jobId: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 8
  },
  detailLabel: {
    fontSize: 13,
    color: '#888',
    marginBottom: 5
  },
  timelineSection: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 20
  },
  timelineItem: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-start'
  },
  timelineLeft: {
    alignItems: 'center',
    marginRight: 15
  },
  timelineDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginTop: 2
  },
  timelineLine: {
    width: 2,
    height: 40,
    marginTop: 8
  },
  timelineContent: {
    flex: 1,
    paddingTop: 2
  },
  timelineTask: {
    fontSize: 14,
    fontWeight: '500'
  },
  timelineTime: {
    fontSize: 12,
    color: '#999'
  },
  buttonsSection: {
    paddingHorizontal: 15,
    marginBottom: 30
  },
  actionButton: {
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12
  },
  completeButton: {
    backgroundColor: COLORS.purple,
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10
  }
});
