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
import { styles as appStyles} from "../styles/index.styles";

function isValidEmail(email: string) {
  // simple, practical email check (not perfect, but good UX)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
    const allowedDomains = new Set(["utep.edu", "miners.utep.edu"]);

    function isAllowedUtepEmail(email: string) {
  const e = email.trim().toLowerCase();
  const at = e.lastIndexOf("@");
  if (at === -1) return false;
  return allowedDomains.has(e.slice(at + 1));
}

  const emailOk = useMemo(() => {
    if (!isValidEmail(normalizedEmail)) return false;
    // keep this rule now so your UI matches your eventual auth policy
    return isAllowedUtepEmail(normalizedEmail);
  }, [normalizedEmail]);

  const onSendLink = async () => {
    if (!isValidEmail(normalizedEmail)) {
      Alert.alert("Invalid email", "Please enter a valid email address.");
      return;
    }
    if (!isAllowedUtepEmail(normalizedEmail)) {
      Alert.alert("UTEP email required", "Please use your @miners.utep.edu or @utep.edu email.");
      return;
    }

    try {
      setStatus("sending");

      // ✅ Later: replace this with Firebase sendSignInLinkToEmail(...)
      await new Promise((r) => setTimeout(r, 600));

      setStatus("sent");
      Alert.alert("Check your email", "We sent you a sign-in link. Open it to continue.");
    } catch (e: any) {
      setStatus("idle");
      Alert.alert("Error", e?.message ?? "Something went wrong.");
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
          <Text style={styles.title}>Sign in</Text>
          <Text style={styles.subtitle}>
            Enter your UTEP email and we’ll send you a sign-in link.
          </Text>

          <View style={styles.inputWrap}>
            <Text style={styles.label}>UTEP Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="name@utep.edu"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              inputMode="email"
              style={styles.input}
              returnKeyType="send"
              onSubmitEditing={onSendLink}
            />
            {!emailOk && normalizedEmail.length > 0 && (
              <Text style={styles.helper}>Use a valid @utep.edu email address.</Text>
            )}
          </View>

          <Pressable
            onPress={onSendLink}
            disabled={!emailOk || status === "sending"}
            style={({ pressed }) => [
              styles.button,
              (!emailOk || status === "sending") && styles.buttonDisabled,
              pressed && emailOk && status !== "sending" && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>
              {status === "sending" ? "Sending…" : "Send sign-in link"}
            </Text>
          </Pressable>

          {status === "sent" && (
            <Text style={styles.sentText}>
              Link sent. Check your inbox (and spam/junk) and open the link to finish sign-in.
            </Text>
          )}
        <View style={styles.createWrap}>
  <Text style={styles.createText}>Don&apos;t have a UTEP SHPE/MAES account?</Text>

  <Pressable
    onPress={() => router.push("/create-profile")}
    style={({ pressed }) => [
      styles.createBtn,
      pressed && styles.createBtnPressed,
    ]}
  >
    <Text style={styles.createBtnText}>Create account</Text>
  </Pressable>
        </View>
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

  sentText: { marginTop: 14, fontSize: 13, opacity: 0.8 },
  createWrap: { marginTop: 18, alignItems: "center" },
createText: { fontSize: 13, opacity: 0.75, marginBottom: 10 },
createBtn: {
  width: "100%",
  paddingVertical: 12,
  borderRadius: 12,
  borderWidth: 1,
  borderColor: "#E5E5E5",
  backgroundColor: "#FFFFFF",
  alignItems: "center",
},
createBtnPressed: { opacity: 0.85 },
createBtnText: { fontSize: 16, fontWeight: "700", color: "#0B1F3A" },
});