import { StyleSheet, } from "react-native";
// Stylesheet defining all visual styles for the component
export const styles = StyleSheet.create({
  // Main container with gradient-like background
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA'
  },

  // Header section containing logo and org name
  headerSection: {
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.04)",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
    elevation: 2,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  headerAccentBar: {
    height: 6,
    borderRadius: 999,
    backgroundColor: " #FF8200",
    marginBottom: 14,
    opacity: 0.95,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 14,
  },
  headerTextWrap: { flex: 1 },

  // Logo image styling
  logo: {
    width: 200,
    height: 100,
    marginBottom: 15,
  },

  // Organization name text
  orgName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#002649',
    marginBottom: 5,
  },

  // University name text
  university: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    letterSpacing: 1,
  },

  // Generic section container
  section: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 3,
  },

  // Text section without container (for Mission/Vision)
  textSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 24,
    borderRadius: 20,
    shadowColor: '#002649',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },

  // Section header with icon and title
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  // Section title text
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#002649',
    marginLeft: 12,
  },

  // Body text for mission/vision
  bodyText: {
    fontSize: 15,
    lineHeight: 24,
    color: '#555',
    fontWeight: '400',
  },

  // "Our 6 Pillars" header container
  pillarsHeaderContainer: {
    paddingHorizontal: 15,
    paddingTop: 20,
    paddingBottom: 5,
  },

  // "Our 6 Pillars" header
  pillarsHeader: {
    fontSize: 24,
    fontWeight: '800',
    color: '#002649',
    textAlign: 'center',
    marginBottom: 5,
  },

  // Individual pillar section (white card container)
  pillarSection: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#002649',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 4,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },

  // Individual pillar card content
  pillarCard: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // Icon container with colored background
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },


  // Pillar text content container
  pillarContent: {
    flex: 1,
  },

  // Pillar title
  pillarTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#002649',
    marginBottom: 6,
  },

  // Pillar description
  pillarDescription: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  // Social media icons container
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  // Spacing between social icons
  socialIcon: {
    marginLeft: 20,
  },

  // Bottom spacer for tab bar
  bottomSpacer: {
    height: 20,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 10,
    shadowColor: "#002649",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  socialPressed: {
    opacity: 0.75,
    transform: [{ scale: 0.98 }],
  },
  footer: {
    marginTop: 30,
    paddingTop: 24,
    paddingBottom: 40,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "rgba(0,0,0,0.06)",
    backgroundColor: "#FFFFFF",
  },

  footerTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
    marginBottom: 4,
  },

  footerSubtitle: {
    fontSize: 13,
    color: "#777",
    marginBottom: 16,
  },
  contributorsSection: {
    marginHorizontal: 15,
    marginTop: 25,
    paddingVertical: 15,
    alignItems: 'center',
  },

  contributorsTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#999',
    letterSpacing: 1,
    textTransform: 'uppercase',
    marginBottom: 12,
  },

  contributorsRow: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },

  // BEFORE: width/height: 36 (slightly small for touch targets if interactive)
  // AFTER: Increased to 40 for better visibility and potential tap target
  contributorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E8EEF4',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },

  contributorInitials: {
    fontSize: 12,
    fontWeight: '600',
    color: '#667788',
  },

  contributorsSubtitle: {
    fontSize: 11,
    color: '#AAA',
    marginTop: 10,
    fontStyle: 'italic',
  },
  authBtn: {
    position: "absolute",
    top: 16,
    right: 16,
    zIndex: 50,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  authBtnText: {
    fontSize: 14,
    fontWeight: "600",
  },
});



