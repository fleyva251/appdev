import React, { useMemo, useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles as appStyles } from "../styles/index.styles";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

const allowedDomains = new Set(["utep.edu", "miners.utep.edu"]);

function isAllowedUtepEmail(email: string) {
  const e = email.trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at === -1) return false;
  return allowedDomains.has(e.slice(at + 1));
}

export default function CreateProfile() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState<"idle" | "saving">("idle");

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);

  const formOk = useMemo(() => {
    if (!isValidEmail(normalizedEmail)) return false;
    if (!isAllowedUtepEmail(normalizedEmail)) return false;
    if (firstName.trim().length === 0) return false;
    if (lastName.trim().length === 0) return false;
    return true;
  }, [normalizedEmail, firstName, lastName]);

  const onCreateProfile = async () => {
    if (!isValidEmail(normalizedEmail)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }
    if (!isAllowedUtepEmail(normalizedEmail)) {
      Alert.alert(
        "UTEP email required",
        "Please use your @utep.edu or @miners.utep.edu email."
      );
      return;
    }
    if (firstName.trim().length === 0 || lastName.trim().length === 0) {
      Alert.alert("Missing info", "Please enter your first and last name.");
      return;
    }

    try {
      setStatus("saving");

      // ✅ Later: save to Firebase/Firestore.
      await new Promise((r) => setTimeout(r, 600));

      Alert.alert(
        "Profile created (placeholder)",
        "Next step: connect this to Firebase and create the user record."
      );

      router.back(); // or router.push("/sign-in") if you prefer
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "Something went wrong.");
    } finally {
      setStatus("idle");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={styles.safe}
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <Pressable onPress={() => router.back()} style={appStyles.authBtn}>
          <Text style={appStyles.authBtnText}>Back</Text>
        </Pressable>

        <View style={styles.container}>
          <Text style={styles.title}>Create profile</Text>
          <Text style={styles.subtitle}>
            Use your @utep.edu or @miners.utep.edu email.
          </Text>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>UTEP Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@miners.utep.edu or name@utep.edu"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              inputMode="email"
              style={styles.input}
              returnKeyType="next"
            />
            {normalizedEmail.length > 0 &&
              (!isValidEmail(normalizedEmail) || !isAllowedUtepEmail(normalizedEmail)) && (
                <Text style={styles.helper}>
                  Use a valid @utep.edu or @miners.utep.edu email address.
                </Text>
              )}
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>First name</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              placeholder="First name"
              autoCapitalize="words"
              autoCorrect={false}
              textContentType="givenName"
              style={styles.input}
              returnKeyType="next"
            />
          </View>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>Last name</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              placeholder="Last name"
              autoCapitalize="words"
              autoCorrect={false}
              textContentType="familyName"
              style={styles.input}
              returnKeyType="done"
              onSubmitEditing={onCreateProfile}
            />
          </View>

          <Pressable
            onPress={onCreateProfile}
            disabled={!formOk || status === "saving"}
            style={({ pressed }) => [
              styles.button,
              (!formOk || status === "saving") && styles.buttonDisabled,
              pressed && formOk && status !== "saving" && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              {status === "saving" ? "Creating…" : "Create profile"}
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F5F7FB" },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 24 },

  title: { fontSize: 28, fontWeight: "800", marginBottom: 8, color: "#0B1F3A" },
  subtitle: { fontSize: 14, opacity: 0.75, marginBottom: 18 },

  inputWrap: { marginBottom: 14 },
  label: { fontSize: 12, fontWeight: "700", marginBottom: 6, opacity: 0.8 },
  input: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
  },
  helper: { marginTop: 8, fontSize: 12, color: "#B91C1C" },

  button: {
    backgroundColor: "#0B1F3A",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDisabled: { opacity: 0.45 },
  buttonPressed: { opacity: 0.9 },
  buttonText: { color: "#FFFFFF", fontSize: 16, fontWeight: "700" },
});