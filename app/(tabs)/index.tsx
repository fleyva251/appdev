// Import necessary React and React Native components
// AFTER: Added Image for logo display, Dimensions for responsive sizing
import { Animated, Dimensions, Image, Linking, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../../styles/index.styles";

// Import FontAwesome icons from Expo vector icons library
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRef, useEffect } from "react";

import { router } from "expo-router";

// AFTER: Get screen dimensions for responsive sizing
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// AFTER: Responsive scaling utility - scales based on screen width
// Base design width is 375 (iPhone SE/8 width)
const scale = (size: number) => (SCREEN_WIDTH / 375) * size;

// Define the structure for each pillar item
type PillarItem = {
  id: string;
  icon: string;
  color: string;
  title: string;
  description: string;
}

export default function Index() { 
  // Data array containing all 6 pillars with their respective icons and descriptions
  const pillars: PillarItem[] = [
    // TODO: Populate this array with the 6 pillars data.
    // Difficulty: Easy
    // Instructions: Add objects with id, icon, color, title, and description for each pillar.
    {
      id: "academic",
      icon: "graduation-cap",
      color: "#9CA3AF",
      title: "Academic Development",
      description: "Supporting students with resources and metorship to excel academically.",
    },
    {
      id: "career",
      icon: "briefcase",
      color: "#012f6b",
      title: "Career Development",
      description: "Building community and inclusivity through events that strengthen chapter culture.",
    },
    {
      id: "community",
      icon: "hands-helping",
      color: "#0B1F3A",
      title: "Community Outreach",
      description: "Giving back to El Paso through volunteering and STEM education initiatives.",
    },
    {
      id: "leadership",
      icon: "calendar-check",
      color: "#9CA3AF",
      title: "Leadership Development",
      description: "Providing opportunities for members to grow into confident, capable leaders.",
    },
    {
      id: "professional",
      icon: "user-tie",
      color: "#012f6b",
      title: "Professional Development",
      description: "Connecting students to industry professionals and career resources."
    },
    {
      id: "technical",
      icon: "laptop-code",
      color: "#0B1F3A",
      title: "Technical Development",
      description: "Cultivating technical skills through workships, coding projects, and innovation labs.",
    }
  ];

  // Animation values for each pillar
  const fadeTranslateValues = useRef(
    pillars.map(() => new Animated.Value(0))
  ).current;

  const scaleValues = useRef(
    pillars.map(() => new Animated.Value(1))
  ).current;

  useEffect(() => {
    const animationsSequence = fadeTranslateValues.map((anim, index) =>
      Animated.timing(anim, {
        toValue: 1,
        duration: 400,
        delay: index * 120,
        useNativeDriver: true,
      })
    );

    Animated.stagger(120, animationsSequence).start();
  }, [fadeTranslateValues]);

  return (
    // SafeAreaView ensures content doesn't overlap with device notches/status bars
    <SafeAreaView style={styles.container}>
      {/* ScrollView allows the content to be scrollable */}
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER SECTION - Logo and Organization Name */}
        {/* BEFORE: Empty header section with TODO comment */}
        {/* AFTER: Added logo image for consistency with Calendar tab */}
        <View style={styles.headerSection}>
          <Pressable onPress={() => router.push("/sign-in")} style={styles.authBtn}>
      <Text style={styles.authBtnText}>Sign in</Text>
    </Pressable>
          <Image
            source={require('../../assets/images/shpemaeslogo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* MISSION SECTION */}
        {/* TODO: Create Mission Section. */}
        {/* Difficulty: Easy */}
        {/* Instructions: Add a section header with icon and title, and body text for the mission. */}
        <View style={styles.textSection}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="bullseye" size={20} color="#012f6b" solid />
            <Text style={styles.sectionTitle}>Our Mission</Text>
          </View>
          <Text style={styles.bodyText}>Engage UTEP and El Paso students through academic,
            leadeership, professional, and service opportunities in support of their growth opportunities
            in support of their growth as STEM professionals.
          </Text>
        </View>

        {/* VISION SECTION */}
        {/* TODO: Create Vision Section. */}
        {/* Difficulty: Easy */}
        {/* Instructions: Add a section header with icon and title, and body text for the vision. */}
        <View style={styles.textSection}>
          <View style={styles.sectionHeader}>
            <FontAwesome5 name="eye" size={20} color="#012f6b" solid />
            <Text style={styles.sectionTitle}>Our Vision</Text>
          </View>
          <Text style={styles.bodyText}>To be the model organization that develops socially responsible STEM
            professionals who make a lasting STEM professionals who
            make a lasting impact and serve as role models within their communities.
          </Text>
        </View>

        {/* 6 PILLARS SECTION HEADER */}
        {/* TODO: Create Pillars Header. */}
        {/* Difficulty: Easy */}
        <View style={styles.pillarsHeaderContainer}>
          <Text style={styles.pillarsHeader}>Our 6 Pillars</Text>
        </View>
        {/* Map through each pillar and render individual cards */}
        {/* TODO: Create Pillars Section. Map through the pillars array. */}
        {/* Difficulty: Medium */}
        {/* Instructions: Use pillars.map() to render a View for each pillar. Display icon, title, and description. */}
        {pillars.map((pillar, index) => {
          const fadeTranslate = fadeTranslateValues[index];
          const scale = scaleValues[index];

          const animatedStyle = {
            opacity: fadeTranslate,
            transform: [
              {
                translateY: fadeTranslate.interpolate({
                  inputRange: [0, 1],
                  outputRange: [20, 0], // slide up
                }),
              },
              { scale },
            ],
          };

          const handlePressIn = () => {
            Animated.spring(scale, {
              toValue: 0.97,
              useNativeDriver: true,
              speed: 20,
              bounciness: 4,
            }).start();
          };

          const handlePressOut = () => {
            Animated.spring(scale, {
              toValue: 1,
              useNativeDriver: true,
              speed: 20,
              bounciness: 4,
            }).start();
          };

          return (
            <Animated.View
              key={pillar.id}
              style={[styles.pillarSection, animatedStyle]}
            >
              <Pressable
                android_ripple={{ color: '#e0e0e0', borderless: false }}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
              >
                <View style={styles.pillarCard}>
                  {/* Icon */}
                  <View
                    style={[
                      styles.iconContainer,
                      { backgroundColor: pillar.color },
                    ]}
                  >
                    <FontAwesome5
                      name={pillar.icon as any}
                      size={24}
                      color="#FFFFFF"
                      solid
                    />
                  </View>

                  {/* Text */}
                  <View style={styles.pillarContent}>
                    <Text style={styles.pillarTitle}>{pillar.title}</Text>
                    <Text style={styles.pillarDescription}>
                      {pillar.description}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </Animated.View>
          );
        })}
        <View style={styles.contributorsSection}>
          <Text style={styles.contributorsTitle}>Contributors</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.contributorsRow}
          >
            {/* Aleida Holguin, Sabina Sosa, Brian Casio, Benjamin Gurovich, Diego Reyes Bretado, Namoi Ortega Armenda Aden Ramierez*/}
            {['AH', 'SS', 'BC', 'BG', 'DRB', 'NOA', 'AR'].map((initials, index) => (
              <View key={index} style={styles.contributorAvatar}>
                <Text style={styles.contributorInitials}>{initials}</Text>
              </View>
            ))}
          </ScrollView>
          <Text style={styles.contributorsSubtitle}>Thank you to everyone who made this app possible</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerTitle}>SHPE // MAES UTEP</Text>
          <Text style={styles.footerSubtitle}>Empowering the next generation of engineers</Text>

          <View style={styles.socialContainer}>
            <Pressable
              style={({ pressed }) => [styles.socialButton, pressed && styles.socialPressed]}
              onPress={() => Linking.openURL("https://facebook.com/utepmaesshpe")}
            >
              <Ionicons name="logo-facebook" size={22} color="#002649" />
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.socialButton, pressed && styles.socialPressed]}
              onPress={() => Linking.openURL("https://www.instagram.com/utepshpemaes")}
            >
              <Ionicons name="logo-instagram" size={22} color="#002649" />
            </Pressable>

            <Pressable
              style={({ pressed }) => [styles.socialButton, pressed && styles.socialPressed]}
              onPress={() => Linking.openURL("https://www.linkedin.com/company/utep-shpe-maes-engineering")}
            >
              <Ionicons name="logo-linkedin" size={22} color="#002649" />
            </Pressable>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
  
}

