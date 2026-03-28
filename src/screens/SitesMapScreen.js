import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  FlatList
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

const DUMPING_SITES = [
  {
    id: '1',
    name: 'Dumping Site A',
    distance: '2.5 km away',
    capacity: 85,
    address: 'Industrial Zone, Maputo'
  },
  {
    id: '2',
    name: 'Dumping Site B',
    distance: '4.2 km away',
    capacity: 45,
    address: 'Suburb area, Maputo'
  },
  {
    id: '3',
    name: 'Dumping Site C',
    distance: '6.1 km away',
    capacity: 92,
    address: 'Outskirts, Maputo'
  }
];

export default function SitesMapScreen() {
  const renderSiteCard = ({ item }) => (
    <TouchableOpacity style={styles.siteCard}>
      <View style={styles.siteHeader}>
        <View>
          <Text style={styles.siteName}>{item.name}</Text>
          <Text style={styles.siteDistance}>{item.distance}</Text>
          <Text style={styles.siteAddress}>{item.address}</Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={COLORS.green} />
      </View>
      <View style={styles.capacitySection}>
        <Text style={styles.capacityLabel}>Capacity: {item.capacity}%</Text>
        <View style={styles.capacityBar}>
          <View 
            style={[
              styles.capacityFill,
              { width: `${item.capacity}%` }
            ]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
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
        <Text style={styles.headerTitle}>Maputo Dumping Sites</Text>
      </LinearGradient>

      {/* Map View Placeholder */}
      <View style={styles.mapContainer}>
        <View style={styles.mapPlaceholder}>
          <Ionicons name="map" size={64} color={COLORS.green} />
          <Text style={styles.mapText}>Interactive Map View</Text>
          <Text style={styles.mapSubtext}>Showing available dumping sites</Text>
        </View>
      </View>

      {/* Sites List */}
      <FlatList
        data={DUMPING_SITES}
        renderItem={renderSiteCard}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        contentContainerStyle={styles.listContainer}
      />
    </View>
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
  mapContainer: {
    height: 200,
    backgroundColor: '#C8E6F5',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#96D4EA'
  },
  mapPlaceholder: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapText: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginTop: 10
  },
  mapSubtext: {
    fontSize: 12,
    color: '#888',
    marginTop: 5
  },
  listContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20
  },
  siteCard: {
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  siteHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12
  },
  siteName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 3
  },
  siteDistance: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2
  },
  siteAddress: {
    fontSize: 12,
    color: '#888'
  },
  capacitySection: {
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 10
  },
  capacityLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.green,
    marginBottom: 8
  },
  capacityBar: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden'
  },
  capacityFill: {
    height: '100%',
    backgroundColor: COLORS.green
  }
});
