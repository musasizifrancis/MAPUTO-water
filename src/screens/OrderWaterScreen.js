import React, { useState } from 'react';
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

const WATER_PACKAGES = [
  { id: 1, liters: 5000, price: 150, label: '5,000L' },
  { id: 2, liters: 10000, price: 280, label: '10,000L' },
  { id: 3, liters: 20000, price: 500, label: '20,000L' },
  { id: 4, liters: 30000, price: 700, label: '30,000L' }
];

export default function OrderWaterScreen() {
  const [selectedPackage, setSelectedPackage] = useState(WATER_PACKAGES[0]);

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
        <Text style={styles.headerTitle}>Order Water</Text>
      </LinearGradient>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <Ionicons name="water" size={40} color={COLORS.green} />
        <Text style={styles.infoTitle}>Fresh Water Delivery</Text>
        <Text style={styles.infoSubtitle}>Fast and reliable water delivery to Maputo</Text>
      </View>

      {/* Package Selection */}
      <View style={styles.packagesSection}>
        <Text style={styles.sectionTitle}>Select Quantity</Text>
        {WATER_PACKAGES.map((pkg) => (
          <TouchableOpacity
            key={pkg.id}
            style={[
              styles.packageCard,
              selectedPackage.id === pkg.id && styles.packageCardSelected
            ]}
            onPress={() => setSelectedPackage(pkg)}
          >
            <View style={styles.packageContent}>
              <Text style={[
                styles.packageLabel,
                selectedPackage.id === pkg.id && { color: COLORS.green }
              ]}>
                {pkg.label}
              </Text>
              <Text style={styles.packagePrice}>{pkg.price} MZN</Text>
            </View>
            <View style={[
              styles.packageRadio,
              selectedPackage.id === pkg.id && styles.packageRadioSelected
            ]} />
          </TouchableOpacity>
        ))}
      </View>

      {/* Order Summary */}
      <View style={styles.summaryCard}>
        <Text style={styles.summaryTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Quantity:</Text>
          <Text style={styles.summaryValue}>{selectedPackage.label}</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>Price:</Text>
          <Text style={styles.summaryValue}>{selectedPackage.price} MZN</Text>
        </View>
        <View style={[styles.summaryRow, styles.summaryRowBold]}>
          <Text style={[styles.summaryLabel, { fontWeight: 'bold' }]}>Total:</Text>
          <Text style={[styles.summaryValue, { fontWeight: 'bold', color: COLORS.green }]}>
            {selectedPackage.price} MZN
          </Text>
        </View>
      </View>

      {/* Delivery Info */}
      <View style={styles.deliveryCard}>
        <Text style={styles.deliveryTitle}>Estimated Delivery</Text>
        <View style={styles.deliveryInfo}>
          <Ionicons name="time" size={20} color={COLORS.green} />
          <Text style={styles.deliveryText}>1-2 hours from now</Text>
        </View>
        <View style={styles.deliveryInfo}>
          <Ionicons name="location" size={20} color={COLORS.green} />
          <Text style={styles.deliveryText}>City Center & Suburbs</Text>
        </View>
      </View>

      {/* Order Button */}
      <TouchableOpacity style={styles.orderButton}>
        <Ionicons name="checkmark-circle" size={20} color={COLORS.white} />
        <Text style={styles.orderButtonText}>Place Order</Text>
      </TouchableOpacity>

      <View style={{ height: 30 }} />
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
    marginBottom: 20
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
  infoCard: {
    alignItems: 'center',
    paddingVertical: 25,
    marginHorizontal: 15,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 10
  },
  infoSubtitle: {
    fontSize: 12,
    color: '#888',
    marginTop: 5
  },
  packagesSection: {
    paddingHorizontal: 15,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 15
  },
  packageCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: COLORS.border
  },
  packageCardSelected: {
    borderColor: COLORS.green,
    backgroundColor: '#F0F8F4'
  },
  packageContent: {
    flex: 1
  },
  packageLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 4
  },
  packagePrice: {
    fontSize: 14,
    color: '#888'
  },
  packageRadio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.border
  },
  packageRadioSelected: {
    backgroundColor: COLORS.green,
    borderColor: COLORS.green
  },
  summaryCard: {
    marginHorizontal: 15,
    padding: 16,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 12
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  summaryRowBold: {
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingTop: 12,
    marginBottom: 0
  },
  summaryLabel: {
    fontSize: 14,
    color: '#666'
  },
  summaryValue: {
    fontSize: 14,
    color: COLORS.darkGray
  },
  deliveryCard: {
    marginHorizontal: 15,
    padding: 16,
    backgroundColor: COLORS.lightGray,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  deliveryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 12
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  deliveryText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 12
  },
  orderButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.green,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15
  },
  orderButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 10
  }
});
