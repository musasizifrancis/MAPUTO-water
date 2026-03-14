import React from 'react';
import {
  View,
  Text,
  ScrollView,
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

const EARNINGS_DATA = [
  { day: 'Mon', earnings: 850 },
  { day: 'Tue', earnings: 1200 },
  { day: 'Wed', earnings: 950 },
  { day: 'Thu', earnings: 1100 },
  { day: 'Fri', earnings: 1350 },
  { day: 'Sat', earnings: 1000 },
  { day: 'Sun', earnings: 800 }
];

const RECENT_JOBS = [
  { id: 1, job: 'Sludge Emptying', amount: 500, time: '14:30' },
  { id: 2, job: 'Sludge Emptying', amount: 450, time: '12:15' },
  { id: 3, job: 'Water Delivery', amount: 150, time: '10:00' },
  { id: 4, job: 'Sludge Emptying', amount: 480, time: '08:45' }
];

export default function EarningsScreen() {
  const totalEarnings = EARNINGS_DATA.reduce((sum, day) => sum + day.earnings, 0);
  const avgDaily = Math.round(totalEarnings / EARNINGS_DATA.length);

  const renderChartBar = ({ item }) => (
    <View style={styles.chartColumn}>
      <View style={[styles.chartBar, { height: `${(item.earnings / 1500) * 100}%` }]} />
      <Text style={styles.chartLabel}>{item.day}</Text>
    </View>
  );

  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <View>
        <Text style={styles.jobName}>{item.job}</Text>
        <Text style={styles.jobTime}>{item.time}</Text>
      </View>
      <Text style={styles.jobAmount}>+{item.amount} MZN</Text>
    </View>
  );

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
        <Text style={styles.headerTitle}>Earnings Report</Text>
      </LinearGradient>

      {/* Total Earnings Card */}
      <View style={styles.totalCard}>
        <View>
          <Text style={styles.totalLabel}>Total This Week</Text>
          <Text style={styles.totalAmount}>{totalEarnings} MZN</Text>
          <Text style={styles.avgDaily}>Average Daily: {avgDaily} MZN</Text>
        </View>
        <Ionicons name="cash" size={64} color={COLORS.green} />
      </View>

      {/* Weekly Chart */}
      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Weekly Breakdown</Text>
        <View style={styles.chartContainer}>
          <FlatList
            data={EARNINGS_DATA}
            renderItem={renderChartBar}
            keyExtractor={item => item.day}
            scrollEnabled={false}
            numColumns={7}
            columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10 }}
          />
        </View>
      </View>

      {/* Recent Jobs */}
      <View style={styles.jobsSection}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        <FlatList
          data={RECENT_JOBS}
          renderItem={renderJobItem}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
        />
      </View>

      {/* Performance Stats */}
      <View style={styles.statsSection}>
        <Text style={styles.sectionTitle}>Your Performance</Text>
        <View style={styles.statRow}>
          <View style={styles.statBox}>
            <Ionicons name="checkmark-circle" size={28} color={COLORS.green} />
            <Text style={styles.statValue}>28</Text>
            <Text style={styles.statLabel}>Jobs Done</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="star" size={28} color={COLORS.purple} />
            <Text style={styles.statValue}>4.8</Text>
            <Text style={styles.statLabel}>Rating</Text>
          </View>
          <View style={styles.statBox}>
            <Ionicons name="flame" size={28} color={'#FF6B35'} />
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>Streak Days</Text>
          </View>
        </View>
      </View>

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
  totalCard: {
    backgroundColor: COLORS.lightGray,
    marginHorizontal: 15,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border
  },
  totalLabel: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: COLORS.green,
    marginBottom: 5
  },
  avgDaily: {
    fontSize: 12,
    color: '#666'
  },
  chartSection: {
    paddingHorizontal: 15,
    marginBottom: 25
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginBottom: 15
  },
  chartContainer: {
    backgroundColor: COLORS.lightGray,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border
  },
  chartColumn: {
    width: '13%',
    alignItems: 'center',
    height: 120
  },
  chartBar: {
    width: '100%',
    backgroundColor: COLORS.green,
    borderRadius: 4,
    marginBottom: 8
  },
  chartLabel: {
    fontSize: 11,
    color: '#666',
    fontWeight: '500'
  },
  jobsSection: {
    paddingHorizontal: 15,
    marginBottom: 25
  },
  jobItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border
  },
  jobName: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.darkGray,
    marginBottom: 4
  },
  jobTime: {
    fontSize: 12,
    color: '#999'
  },
  jobAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.green
  },
  statsSection: {
    paddingHorizontal: 15
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10
  },
  statBox: {
    flex: 1,
    backgroundColor: COLORS.lightGray,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.border
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: 8
  },
  statLabel: {
    fontSize: 11,
    color: '#888',
    marginTop: 4,
    textAlign: 'center'
  }
});
