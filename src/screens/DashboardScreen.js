import React from 'react';
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

export default function DashboardScreen({ navigation }) {
  const [driverStats] = React.useState({
    jobsCompleted: 8,
    earnings: '3,200 MZN',
    distance: '45 KM',
    rating: 4.8,
    driverId: 'WEY-2024-001'
  });

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.purple} />
      
      {/* Purple Header */}
      <LinearGradient
        colors={[COLORS.purple, COLORS.purple]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <View style={styles.decorativeDots}>
          {[...Array(12)].map((_, i) => (
            <View key={i} style={styles.dot} />
          ))}
        </View>
        <Text style={styles.headerTitle}>Dashboard - Maputo</Text>
      </LinearGradient>

      {/* Welcome Section */}
      <View style={styles.welcomeCard}>
        <View>
          <Text style={styles.welcomeTitle}>Welcome Back!</Text>
          <Text style={styles.driverInfo}>Driver ID: {driverStats.driverId}</Text>
          <Text style={[styles.rating, { color: COLORS.green }]}>
            ⭐ Rating: {driverStats.rating}/5.0
          </Text>
        </View>
      </View>

      {/* Stats Section */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Today's Stats</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <Ionicons name="checkmark-circle" size={32} color={COLORS.green} />
            <Text style={styles.statLabel}>Jobs Completed</Text>
            <Text style={styles.statValue}>{driverStats.jobsCompleted}</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="cash" size={32} color={COLORS.green} />
            <Text style={styles.statLabel}>Earnings</Text>
            <Text style={styles.statValue}>{driverStats.earnings}</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="navigate" size={32} color={COLORS.green} />
            <Text style={styles.statLabel}>Distance</Text>
            <Text style={styles.statValue}>{driverStats.distance}</Text>
          </View>
        </View>
      </View>

      {/* Services Section */}
      <View style={styles.servicesSection}>
        <Text style={styles.sectionTitle}>Services</Text>
        <TouchableOpacity 
          style={styles.serviceButton}
          onPress={() => navigation.navigate('Job')}
        >
          <Ionicons name="water" size={24} color={COLORS.white} />
          <Text style={styles.serviceButtonText}>Sludge Emptying</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.serviceButton}
          onPress={() => navigation.navigate('Water')}
        >
          <Ionicons name="droplet" size={24} color={COLORS.white} />
          <Text style={styles.serviceButtonText}>Order Water</Text>
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="call" size={24} color={COLORS.green} />
          <Text style={styles.actionButtonText}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="stats-chart" size={24} color={COLORS.green} />
          <Text style={styles.actionButtonText}>Analytics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="settings" size={24} color={COLORS.green} />
          <Text style={styles.actionButtonText}>Settings</Text>
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
    paddingBottom: 30,
    paddingHorizontal: 20
  },
  decorativeDots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20
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
    color: COLORS.white,
    marginBottom: 10
  },
  welcomeCard: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 15,
    marginTop: -20,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20
  },
  welcomeTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 5
  },
  driverInfo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 3
  },
  rating: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 5
  },
  statsSection: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 15
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  statCard: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center'
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 5
  },
  servicesSection: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  serviceButton: {
    backgroundColor: COLORS.green,
    flexDirection: 'row',
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  serviceButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  actionButton: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  actionButtonText: {
    color: COLORS.green,
    fontSize: 12,
    fontWeight: '600',
    marginTop: 8
  }
});
